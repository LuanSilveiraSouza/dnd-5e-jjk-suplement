// @ts-ignore
import backToTopScript from "./scripts/backtotop.inline"
import styles from "./styles/backtotop.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const BackToTop: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
        <button class={classNames(displayClass, "backtotop")}>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                class="backToTopIcon"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                aria-label={i18n(cfg.locale).components.backToTop.title}
            >
                <title>{i18n(cfg.locale).components.backToTop.title}</title>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z"></path> 
                </g>
            </svg>
        </button>
    )
}

BackToTop.beforeDOMLoaded = backToTopScript
BackToTop.css = styles

export default (() => BackToTop) satisfies QuartzComponentConstructor
