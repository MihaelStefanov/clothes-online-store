import "./Banner.css";

export default function Banner () {

    return (
        <div className="banner-wrapper">
            <div className="banner-text">
                <h2>Разгледай марката</h2>
                <h1>Adidas</h1>
            </div>
            <div className="banner-media">
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_960,w_960/global_superstar_originals_ss26_launch_glpwomen_banner_hero_2_t_f2714784f4.jpg" alt="" />
            </div>
        </div>
    )
}