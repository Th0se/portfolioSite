/** @format */

const Footer = ({ theme }) => {
    if (theme === 'light') {
        return (
            <div>
                <h1>Contact info</h1>
                <p>Please contact me through the following methods:</p>
                <a
                    href='https://www.linkedin.com/in/thomas-p-6073bb232/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label="Open Thomas Praselino's Linkedin profile in a new tab"
                >
                    <i class='devicon-linkedin-plain-wordmark colored'></i>
                </a>
                <a
                    href='https://github.com/Th0se'
                    target='_blank'
                    rel='noreferrer'
                    aria-label="open Thomas Praselino's Github profile in a new tab"
                >
                    <i class='devicon-github-original-wordmark colored'></i>
                </a>
                <a href='mailto:thomasap1464@gmail.com'>
                    thomasap1464@gmail.com
                </a>
            </div>
        );
    } else if (theme === 'dark') {
        return (
            <div className='footer'>
                <h1>Contact info</h1>
                <p>Please contact me through the following methods:</p>
                <a
                    href='https://www.linkedin.com/in/thomas-p-6073bb232/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label="Open Thomas Praselino's Linkedin profile in a new tab"
                >
                    <i class='devicon-linkedin-plain-wordmark'></i>
                </a>
                <a
                    href='https://github.com/Th0se'
                    target='_blank'
                    rel='noreferrer'
                    aria-label="open Thomas Praselino's Github profile in a new tab"
                >
                    <i class='devicon-github-original-wordmark'></i>
                </a>
                <a href='mailto:thomasap1464@gmail.com'>
                    thomasap1464@gmail.com
                </a>
            </div>
        );
    }
};

export default Footer;
