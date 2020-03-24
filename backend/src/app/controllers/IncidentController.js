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
      const incidents = await connection('incidents').select('*');
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
      return res.status(200).send(incidents);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new IncidentController();
