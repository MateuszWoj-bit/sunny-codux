import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles['card-paragraph']}>Date</p>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles['card-img']}
            />
            <h2 className={styles['card-heading']}>23°C</h2>
            <p className={styles['card-paragraph']}>sunny</p>
        </div>
    );
};
