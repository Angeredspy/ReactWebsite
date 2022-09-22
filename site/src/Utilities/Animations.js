export default class Animations {
    static animation = new Animation();
    
    fadeInScreen = (screen_name) => {
        screen = document.getElementById(screen_name);
        if (!screen || !screen_name) return;
        screen.style.opacity = '5';
        screen.style.transform = 'translateY(1px)'

    }
}