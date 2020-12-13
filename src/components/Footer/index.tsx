import React from "react";
import { FaGithub, FaReddit, FaStackOverflow, FaTwitter } from "react-icons/fa";

import { COLORS } from "../../utils/constants";

interface ISocialLinkProps {
    link: {
        title: string;
        href: string;
    }
}
const SocialLink: React.FunctionComponent<ISocialLinkProps> = (props) => (
    <a href={ props.link.href } title={ props.link.title } target="_blank" rel="noopener noreferrer" css={{
        color: "inherit",
        fontSize: "1.5em",
        margin: 5,
    }}>
        { props.children }
    </a>
);

const SocialLinks: React.FunctionComponent = () => (
    <div>
        <SocialLink link={{ title: "GitHub", href: "https://github.com/Passaportexyz" }}>
            <FaGithub />
        </SocialLink>
        <SocialLink link={{ title: "Twitter", href: "https://twitter.com/codingsh" }}>
            <FaTwitter />
        </SocialLink>
    </div>
);

const FooterLinks: React.FunctionComponent = () => (
    <div css={{
        padding: "2rem 8rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap-reverse",
        color: COLORS.GREY,
        backgroundColor: COLORS.BLUE,
        fontSize: ".8em",
    }}>
        <div></div>
        <SocialLinks />
    </div>
);

const MetaFooter: React.FunctionComponent = () => (
    <div css={{
        padding: "2rem 8rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        color: COLORS.WHITE,
        fontSize: ".8em",
    }}>
        <div>
            Coded with ❤ &amp; ☕ by <a href="https://twitter.com/codingsh" target="__blank">Codingsh</a>
        </div>
        <div>
            &copy; PASSAPORTE
        </div>
    </div>
);

const Footer: React.FunctionComponent = () => (
    <footer css={{
        backgroundColor: COLORS.BLUE,
        color: COLORS.WHITE,
    }}>
        <FooterLinks />
        <MetaFooter />
    </footer>
);

export default Footer;
