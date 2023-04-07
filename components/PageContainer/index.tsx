import React, { PropsWithChildren } from 'react'

interface PageContainerProps {}

const PageContainer: React.FC<PropsWithChildren<PageContainerProps>> = ({
  children,
}) => (
  <div className="max-h-full">
    <div className="bg-slate-100 dark:bg-gray-500 pb-20">
      <div className="max-w-5xl my-0 mx-auto flex h-20">
        <div>Yue</div>
        <div>首页</div>
        <div>博客</div>
        <div>关于我</div>
      </div>
    </div>
    <div className="relative">
      <svg
        preserveAspectRatio="none"
        width="1440"
        height="74"
        viewBox="0 0 1440 74"
        className="absolute bottom-0 w-full text-slate-400 dark:text-gray-900"
      >
        <path
          fill="currentColor"
          d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
        />
      </svg>
    </div>
    <div className="bg-slate-400 dark:bg-gray-900">
      <div className="max-w-5xl my-0 mx-auto ">{children}</div>
    </div>
  </div>
)

export default PageContainer
