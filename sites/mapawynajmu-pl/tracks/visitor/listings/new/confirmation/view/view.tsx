import Image from '../../../../../../../common/components/support/image/image';
import { Link } from '../../../../../../../common/components/support/link/link';
import { ShareOnFacebookButton } from '../../../../../../../common/components/support/share-on-facebook-button/share-on-facebook-button';
import { ListingsNewConfirmationContract } from '../contract/contract';
import styles from './view.module.css';

const ListingsNewConfirmation = (props: ListingsNewConfirmationContract) => {
  console.log('props', props);

  const {
    app: { lang },
    assets: {
      svgs: { facebook: facebookSvg },
    },
    data: {
      announcement: { href, image, title },
    },
    texts: { congratulations, socialImageExplanation },
  } = props;

  console.log('adasd', props);

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.congratulations}>{congratulations}</div>
        <Link
          data={{
            href,
            hrefLang: lang,
            title,
            label: (
              <Image
                src={image}
                alt={title} // TODO: consider description.
                className={styles.image}
              />
            ),
          }}
          className={styles.link}
        />
        <div className={styles.socialImageExplanation}>
          {socialImageExplanation}
        </div>
        <div className={styles.promotionActions}>
          {/* {!isPromoted && (
            <div className="promote">
              <PromoteButton listingId={id} />
              <PromotionBenefits />
            </div>
          )} */}
          <div className={styles.shareOnFacebook}>
            <ShareOnFacebookButton
              href={href}
              facebookSvg={facebookSvg}
              isMobile={false} // TODO
              label="TODO"
              styles={{
                container: styles.shareOnFacebookButtonContainer,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsNewConfirmation;
