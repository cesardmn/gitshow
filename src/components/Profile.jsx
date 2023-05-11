import styles from '@styles/Profile.module.css'

export default function Profile() {
  return (
    <section className={styles.profile}>
      <h1 className={styles.logo}>GitShow</h1>

      <picture className={styles.avatar}>
        <img
          src="https://avatars.githubusercontent.com/u/40774019?v=4"
          alt="avatar"
        />
      </picture>

      <div className={styles.isLogon}>
        <h3 className={styles.userName}>Cesar Dimi</h3>
        <p className={styles.bio}>
          Front-end developer| JavaScript | React | NextJs | Python | Django
        </p>

        <form action="">
          <label htmlFor="repositories">Repositórios</label>
          <select name="repositories" id="repositories">
            <option value="calculator_app">calculator_app</option>
            <option value="rest-countries-api">rest-countries-api</option>
          </select>

          <input
            type="url"
            name="preview-url"
            id="preview-url"
            placeholder="url do preview"
          />

          <button type="submit">cadastrar</button>
        </form>
      </div>

      <div className={styles.socialLogin} hidden>
        <button>GitHub login</button>
      </div>
    </section>
  )
}
