function updateUpvote() {
    const db = getDatabase();
    console.log(upvote);
    const updates = {};
    updates[`articles/${Name}/upvotes`] = Firebase.database.ServerValue.increment(1);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `articles/${Name}`))
    .then((snapshot) => {
    if (snapshot.exists()) {
        const articles1 =snapshot.val();
        setUpvote(articles1.upvote)
    }})
    return update(ref(db), updates);
  }
  export default updateUpvote;