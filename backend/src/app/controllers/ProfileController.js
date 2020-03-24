import connection from '../../database/connection';

class ProfileController {
  async index(req, res) {
    try {
      const incidents = await connection('incidents')
        .where({ ong_id: req.userId })
        .select('*');
      return res.status(200).send(incidents);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new ProfileController();
