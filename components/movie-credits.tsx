import styles from "../styles/movie-credits.module.css";
import { API_URL } from "../app/constants";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return await response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div>
          <img
            width={185}
            height={278}
            src={credit.profile_path || "/images/person.png"}
            alt={credit.name}
          />
          <h3>{`${credit.name} ${
            credit.character !== "" ? "(" + credit.character + ")" : ""
          }`}</h3>
        </div>
      ))}
    </div>
  );
}
