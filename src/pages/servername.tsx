import dynamic from "next/dynamic";

import { memo } from "react";

import CONFIG from "_/config";

import Title, { useTitlePath } from "_/components/title";

const Editors = dynamic(() => import("_/components/editors"), { ssr: false });

export default memo(() => {
  const titlePath = useTitlePath(CONFIG.navigation.serverName, CONFIG.editors.serverName.title);

  return (
    <>
      <Title path={titlePath} />
      <Editors editor="serverName" />
    </>
  );
});
