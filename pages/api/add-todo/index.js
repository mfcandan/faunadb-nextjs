const faunadb = require("faunadb");

const query = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const { title, note } = req.body.data;

  try {
    const dbs = await client.query(
      query.Create(
        query.Collection("todos", {
          data: {
            title: title,
            note: note,
            created_at: Date.now(),
            updated_at: Date.now(),
            completed: false,
          },
        })
      )
    );
    res.status(200).json(dbs);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
