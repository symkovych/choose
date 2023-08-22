import path from "path";
import express from "express";

const app = express();
const port = 3001;

app.get("/fetchCards", (_req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "/", "cardsData.json"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
