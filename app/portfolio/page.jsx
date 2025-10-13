import Link from "next/link";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="content_portfolio">
        <div className="wrapper_main_content">
          <div className="wrapper_video">
            <iframe
              id="video"
              src="https://www.youtube.com/embed/Ncu5EnqsDEg?si=Huy0C_0oKVAWqf1f"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <footer>
        <Link href="/" className="footer_back_main">
          Назад
        </Link>
      </footer>
    </>
  );
}
