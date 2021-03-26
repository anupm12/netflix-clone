/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

const useContent = (target: any) => {
  const [content, setContent] = useState<
    {
      docId: string;
    }[]
  >([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase, target]);

  return { [target]: content };
};

export default useContent;
