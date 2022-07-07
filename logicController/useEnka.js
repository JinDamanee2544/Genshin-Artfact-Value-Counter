import useSWR from "swr";
import axios from "axios";

export default function useEnka(fetchLink) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(fetchLink, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) console.log("Error fetching enka", error);

  return {
    genshinData: data,
    isLoading: !error && !data,
  };
}
