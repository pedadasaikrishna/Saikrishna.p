
import React ,{ useState, useEffect } from "react";
import supabase from '../../supabase.js'; // import the supabase client
import '../../like.css'
const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [selected, setSelected] = useState(null);

  // Fetch current likes and dislikes from Supabase
  useEffect(() => {
    const fetchCounts = async () => {
      const { data } = await supabase.from("feedback").select("*").single(); // Assuming there's only one row to store feedback
      if (data) {
        setLikes(data.likes);
        setDislikes(data.dislikes);
      }
    };

    fetchCounts();
  }, []);

  // Update like and dislike counts in Supabase
  const updateCounts = async (newLikes, newDislikes) => {
    const { data, error } = await supabase
      .from("feedback")
      .upsert(
        { id: 1, likes: newLikes, dislikes: newDislikes },
        { onConflict: ["id"] }
      );

    if (data) {
      setLikes(newLikes);
      setDislikes(newDislikes);
    } else {
      console.error(error);
    }
  };

  const handleLike = () => {
    if (selected === "like") {
      setLikes(likes - 1);
      setSelected(null);
      updateCounts(likes - 1, dislikes);
    } else {
      if (selected === "dislike") {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setSelected("like");
      updateCounts(likes + 1, dislikes);
    }
  };

  const handleDislike = () => {
    if (selected === "dislike") {
      setDislikes(dislikes - 1);
      setSelected(null);
      updateCounts(likes, dislikes - 1);
    } else {
      if (selected === "like") {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setSelected("dislike");
      updateCounts(likes, dislikes + 1);
    }
  };

  return (
    <>
      <button class="faq-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
        </svg>
        <span class="tooltip">Your vote matters! Together, we can accomplish even greater things! 🌟💪🤝</span>
      </button>
      <div className="container">
        <label>
          <input
            type="radio"
            name="evaluation"
            onClick={handleDislike}
            checked={selected === "dislike"}
            readOnly
          />
          <svg
            className="icon dislike"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z" />
          </svg>
        </label>

        <div className="count">
          <div className="number">
            {likes}
            {dislikes}
          </div>
        </div>

        <label>
          <input
            type="radio"
            name="evaluation"
            onClick={handleLike}
            checked={selected === "like"}
            readOnly
          />
          <svg
            className="icon like"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z" />
          </svg>
        </label>
      </div>
    </>
  );
};


export default LikeDislike
