import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcryptjs from 'bcryptjs';

import connection from '../../database/connection';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }
      const { email, password } = req.body;

      const ong = await connection('ongs').where({ email });

      if (ong.length === 0) {
        return res.status(400).send({ error: 'User not exists' });
      }

      const match = bcryptjs.compare(password, ong.password_hash);

      if (match) {
        return res.status(200).send({
          ong: {
            email,
          },
          token: jwt.sign({ id: ong.id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
          }),
        });
      }

      return res.status(401).send({ error: 'Authentication failed' });
    } catch (err) {
      return res.send(err);
    }
  }
}

export default new SessionController();
