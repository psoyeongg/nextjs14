import styles from "../styles/movie-credits.module.css";
import { API_URL } from "../app/constants";

export async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return await response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const { KR } = await getProviders(id);
  return (
    <div className={styles.container}>
      {!KR ? (
        <h3>Nothing..</h3>
      ) : (
        <div>
          {Object.values(KR)?.map(
            (v) =>
              Array.isArray(v) &&
              v.map(({ provider_id, logo_path, provider_name }) => (
                <div key={provider_id}>
                  <img src={logo_path} alt={provider_name} />
                  <h3>{provider_name}</h3>
                </div>
              ))
          )}
        </div>
      )}
    </div>
  );
}
