import React from "react";
import { Link } from "react-router-dom";

export default function About_child() {
    return (
        <div>
            <h1>About_child</h1>
            <div>
                <Link className="bg-green-600" to={"/about"}> back </Link>
            </div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, fuga sint neque eos dolor optio asperiores expedita
            aliquid possimus modi delectus consectetur earum quo cum voluptate?
            Deserunt odio libero expedita quos ipsa id ipsum blanditiis porro,
            labore dolore tenetur incidunt. Quia tenetur dicta quo eligendi
            cumque, molestiae, fuga quaerat quae obcaecati iusto ipsam voluptas!
            Distinctio vitae dolorem ad doloremque placeat optio impedit nobis
            sit, quia obcaecati tempore consectetur natus maiores iure magni,
            culpa illum. Repellendus eos iste blanditiis facilis possimus
            incidunt. Aspernatur optio assumenda, voluptatem officia saepe
            laudantium cupiditate pariatur error suscipit amet vitae, ad magni
            architecto, vel impedit? Accusamus.
        </div>
    );
}
