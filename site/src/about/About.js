/** @format */

const Introduction = ({ theme }) => {
    if (theme === 'light') {
        return (
            <div>
                <h1>About me</h1>
                <p>
                    I am Thomas Praselino, a front end web developer with a year
                    of experience. I create accessible, responsive, and pleasant
                    web pages using the power of Reacts and TailwindCSS.
                </p>
            </div>
        );
    } else if (theme === 'dark') {
        return (
            <div>
                <h1>About me</h1>
                <p>
                    I am Thomas Praselino, a front end web developer with a year
                    of experience. I create accessible, responsive, and pleasant
                    web pages using the power of Reacts and TailwindCSS.
                </p>
            </div>
        );
    }
};

const About = ({ theme }) => {
    return (
        <div>
            <img alt='Thomas Praselino'></img>
            <Introduction theme={theme}></Introduction>
        </div>
    );
};

export default About;
