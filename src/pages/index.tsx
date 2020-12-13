import React from "react";

import Layout from "../layouts/default";
import Logo from "../components/Logo";
import { COLORS } from "../utils/constants";
import getLastPushTime from "../utils/getLastPushTime";

import installers from "../data/installers.yml";
import getPlatform from "../utils/getPlatform";

class IndexPage extends React.PureComponent {
    state = {
        platform: getPlatform(),
        lastBuildDate: new Date(0),
    };

    componentDidMount = () => {
        getLastPushTime()
        .then(date => this.setState({ lastBuildDate: new Date(date) }))
        .catch(() => {});
    }

    render = () => (
        <Layout>
            <div css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "calc(100vh - 72px)",
                backgroundColor: COLORS.BLACK,
                color: COLORS.WHITE,
                textAlign: "center",
            }}>
                <Logo size="200" />
                <div css={{
                    padding: 25,
                    fontSize: "2em",
                }}>
                    PASSPORTE
                </div>
                <div css={{
                    maxWidth: 500,
                    padding: 25,
                }}>
                  PASSAPORTE is NFT Pass for Blockchains
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;
