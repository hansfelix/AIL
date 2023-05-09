import axios from "axios";
const shipUrl = `${import.meta.env.VITE_SHIP_URL}/api/evaluate`;

type ProxyResponse = {
  success: boolean;
  message: string;
};

export const evaluate = async function (payload: any) {
  try {
    const { data } = await axios.post<{ message: string }>(
      shipUrl,
      JSON.parse(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return <ProxyResponse>{
        success: true,
        message: data.message
    }

  } catch (error: any) {
    return <ProxyResponse>{
        success: false,
        message: error.message ?? "Unexpected error, please try again"
    }
  }
};
