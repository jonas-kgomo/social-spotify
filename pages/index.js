import Head from 'next/head'
import Profiles from './profiles'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Social Listen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Listen Together 
        </h1>
        <h1 ><b className="doom">MF DOOM FM</b> </h1>

        <p className="description">
         Start listening with other fans 
          <a
            href="https://www.patreon.com/user?u=23079387"
            className="buttonred"
          >Patreon</a>
         
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <img className="vynil" src="/vynil.svg"/>
            <h3>MF DOOM </h3>
            <p>Currently Playing Hooks</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <p className="button">Login  
            <img src="/spot.svg"  alt="button"/> </p>
            <p>Start chatting </p>
          </a>

          <a
            href="https://www.patreon.com/user?u=23079387"
            className="card"
          >
            <Profiles/>
            <p><b>50,123 </b>  Currently Listening</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
  
      <footer>
       
          <img src="/panel.svg"  alt="Vercel Logo" className="logo" />
      
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0rem;
          height: 100%;
        }

        

        a {
          color: inherit;
          text-decoration: none;
        }

        .button {
          background: #555252;
          color: #CDCDCD;
          padding: 8px;
          justify-content: center;
          text-align: center;
          border-radius: 16px;
          display: flex;
          width: 200px;
          }

         .button img {
           margin: 6px;
           width: 20px;
         } 

         .buttonred {
          background: #f22170;
          color: #fff;
          padding: 8px;
          justify-content: center;
          text-align: center;
          border-radius: 16px;
          display: flex;
          width: 200px;
          }

         .doom {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
          
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          background: linear-gradient(to right, #f32170, 
                    #ff6b08, #cf23cf, #800080); 
           -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text; 
        }
        

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .vynil {
          width: 50%;
          padding: 4px;
        }

        .login {
          justify-content-between;
          padding: 4px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          justify-content: center;
          border-radius: 5px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
