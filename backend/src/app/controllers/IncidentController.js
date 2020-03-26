import * as Yup from 'yup';
import connection from '../../database/connection';

class IncidentController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        value: Yup.number().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }

      const { title, description, value } = req.body;

      await connection('incidents').insert({
        ong_id: req.userId,
        title,
        description,
        value,
      });

      return res.status(201).send({ title, description, value });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      const [count] = await connection('incidents').count();

      const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          'incidents.*',
          'ongs.name',
          'ongs.email',
          'ongs.phone',
          'ongs.city',
          'ongs.uf',
        ]);

      res.header('X-Total-Count', count['count(*)']);
      return res.status(200).send(incidents);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const incidents = await connection('incidents')
        .where({ id })
        .first();

      if (!incidents) {
        return res.status(404).send({ error: 'This incident not exists' });
      }
      return res.status(200).send(incidents);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const incidents = await connection('incidents')
        .where({ id })
        .delete();

      if (!incidents) {
        return res.status(404).send({ error: 'This incident not exists' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new IncidentController();
