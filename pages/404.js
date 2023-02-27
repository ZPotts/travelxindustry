function PageNotFound() {
    return (
      <div className={styles.container}>
        <Head>
          <title>TravelXIndustry</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
            <p>Page not found</p>
        </main>
  
        <footer className={styles.footer}>
          <p>TravelXIndustry - 2023</p>
        </footer>
      </div>
    )
  }

  export default PageNotFound;