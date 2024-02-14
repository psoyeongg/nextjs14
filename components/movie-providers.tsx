"use client";
import { useEffect, useState } from "react";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-providers.module.css";

export default function MovieProviders({ id }: { id: string }) {
  const [providers, setProviders] = useState({});
  const [contury, setCoutury] = useState<string | null>(null);

  const getProviders = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}/providers`);
    const json = await response.json();
    setProviders(json);
    setCoutury(Object.keys(json)[0]);
  };

  useEffect(() => {
    getProviders(id);
  }, []);

  if (!Object.keys(providers).length) return null;

  return (
    <div className={styles.container}>
      <select onChange={(e) => setCoutury(e.target.value)}>
        {Object.keys(providers).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <div className={styles.providers}>
        {providers[contury].flatrate.map(
          ({ provider_id, provider_name, logo_path }) => (
            <div key={provider_id}>
              <img
                width={30}
                height={30}
                src={`	https://media.themoviedb.org/t/p/original${logo_path}`}
                alt={provider_name}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
