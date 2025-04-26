import { useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export function useProjectQuery() {
  useEffect(() => {
    const db = getFirestore();
    // Example: Query projects where tag is "react" and createdAt is after a date
    const q = query(
      collection(db, "projects"),
      where("tags", "array-contains", "react"),
      where("createdAt", ">", new Date("2025-01-01"))
    );
    getDocs(q)
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, doc.data());
        });
      })
      .catch(error => {
        // If a composite index is needed, Firestore will show an error here with a link
        console.error(error);
      });
  }, []);
}