import { projectName, exploreTags } from './exploreData'

import styles from "./Explore.module.css"

const Explore = () => {
    return (
        exploreTags.map( ( item, index ) =>
            <div key={ index }>
                <span>
                    { item.text } <strong>@{ projectName }</strong>
                </span>
                <ul className={ styles.exploreTagsUl }>
                    { item.tags.map( ( tag, tagIndex ) => ( <li key={ tagIndex }>
                        <a className={ styles.exploreTag } aria-label='Explore Tags' href={ tag.link } >
                            <span>{ tag.text }</span>
                        </a>
                    </li> ) )
                    }
                </ul>
            </div>
        )
    )
}
export default Explore