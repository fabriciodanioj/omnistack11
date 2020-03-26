import bcryptjs from 'bcryptjs';
import * as Yup from 'yup';
import connection from '../../database/connection';

class OngController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        phone: Yup.string().required(),
        city: Yup.string().required(),
        uf: Yup.string().required(),
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }

      const { name, email, password, phone, city, uf } = req.body;

      const password_hash = await bcryptjs.hash(password, 10);

      const verify = await connection('ongs').where({ email });

      if (verify.length !== 0) {
        return res.status(400).send({ error: 'Email already exists' });
      }

      await connection('ongs').insert({
        name,
        email,
        password_hash,
        phone,
        city,
        uf,
      });

      return res.status(201).send({ email, password_hash });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async index(req, res) {
    try {
      const ongs = await connection('ongs').select('*');

      return res.status(200).send(ongs);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new OngController();
