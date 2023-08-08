/** @format */
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

const Template = ({ screenshot, Github, site, title, detail, theme }) => {
    const gitLabel = `Open the Github repository of ${title} in a new tab`;
    const siteLabel = `Open ${title} in a new tab`;
    if (theme === 'light') {
        return (
            <div>
                <img
                    alt='site screenshot'
                    src={screenshot}
                ></img>
                <div>
                    <h2>{title}</h2>
                    <p>{detail}</p>
                </div>
                <div>
                    <a
                        href={Github}
                        aria-label={gitLabel}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i class='devicon-github-original-wordmark colored'></i>
                    </a>
                    <a
                        href={site}
                        aria-label={siteLabel}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Icon
                            path={mdiOpenInNew}
                            color='black'
                        />
                    </a>
                </div>
            </div>
        );
    } else if (theme === 'dark') {
        return (
            <div>
                <img
                    alt='site screenshot'
                    src={screenshot}
                ></img>
                <div>
                    <h2>{title}</h2>
                    <p>{detail}</p>
                </div>
                <div>
                    <a
                        href={Github}
                        aria-label={gitLabel}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i class='devicon-github-original-wordmark colored'></i>
                    </a>
                    <a
                        href={site}
                        aria-label={siteLabel}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Icon
                            path={mdiOpenInNew}
                            color='white'
                        />
                    </a>
                </div>
            </div>
        );
    }
};

const Display = ({ theme, array }) => {
    if (theme === 'light') {
        return (
            <>
                <h2>Here are my works</h2>
                <div>
                    {array.map((item) => (
                        <Template
                            screenshot={item.screenshot}
                            Github={item.Github}
                            site={item.site}
                            title={item.title}
                            detail={item.detail}
                            theme={theme}
                        />
                    ))}
                </div>
            </>
        );
    } else if (theme === 'dark') {
        return (
            <>
                <h2>Here are my works</h2>
                <div>
                    {array.map((item) => (
                        <Template
                            screenshot={item.screenshot}
                            Github={item.Github}
                            site={item.site}
                            title={item.title}
                            detail={item.detail}
                            theme={theme}
                        />
                    ))}
                </div>
            </>
        );
    }
};

export default Display;
