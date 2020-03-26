import connection from '../../database/connection';

class ProfileController {
  async index(req, res) {
    try {
      const incidents = await connection('incidents')
        .where({ ong_id: req.userId })
        .select('*');

      const ongName = await connection('ongs')
        .where({ id: req.userId })
        .select('name');

      return res.status(200).send({ incidents, name: ongName });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new ProfileController();
