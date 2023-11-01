import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer">
            <ul>
                <li>
                    <Link to="">
                        <span>소개</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>도움말</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>홍보센터</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>API</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>채용정보</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="">
                        <span>개인정보처리방침</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>약관</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>위치</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>언어</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <span>Meta Verified</span>
                    </Link>
                </li>
            </ul>
            <h2><span>© 2023 INSTAGRAM FROM META</span></h2>
        </div>
    )
}