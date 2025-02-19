import { openDB } from "idb";

const DB_NAME = "quizHistory";
const STORE_NAME = "attempts";

export async function saveAttempt(score) {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { autoIncrement: true });
      }
    },
  });

  const tx = db.transaction(STORE_NAME, "readwrite");
  tx.store.add({ score, date: new Date().toISOString() });
  await tx.done;
}

export async function getAttempts() {
  const db = await openDB(DB_NAME, 1);
  return db.getAll(STORE_NAME);
}