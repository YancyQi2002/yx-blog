import { useEffect, useState } from "react";

export default function useFollowers() {
  const [followers, setFollowers] = useState(0);
  const getFollowers = async () => {
    try {
      const res = await fetch("https://api.bilibili.com/x/relation/stat?vmid=314108035");
      const followers = await res.json();
      setFollowers(followers.follower);
    } catch (error) {}
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return followers;
}
