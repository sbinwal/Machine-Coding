export async function CallLikeAPI(like) {
    const payload = { action: like ? "unlike" : "like" };
  
      const response = await fetch("https://www.greatfrontend.com/api/questions/like-button", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        alert(response.statusText)
        return like;
      }

  
      return !like;
  
  }
  