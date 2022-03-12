import style from './About.module.css';

export default function MemberDetails (){
    return (
        <div className={style.container}>
        <div className={style.containerColoredFrame}>
            <h1 className={style.title}>Notre équipe </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    quis augue massa. Aliquam convallis nec nisl sit amet elementum.
                    Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus
                    lorem sed leo pretium, at porttitor enim condimentum. Pellentesque
                    ac sem laoreet, posuere nisi tincidunt, bibendum est.
                </p>
            </div>
        </div>
    );
}