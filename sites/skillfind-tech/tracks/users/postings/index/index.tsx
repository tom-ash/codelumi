import React from 'react';
import { useData } from '../../../../../src copy/sites/shared/app/functions/store/use-data';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useTexts } from '../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useDispatch } from 'react-redux';
import { useControl } from '../../../../../src copy/sites/shared/app/functions/store/use-control';
import { deleteApi } from '../../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';
import { changeUrl } from '../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import { PostingImage as Image } from './components/image';
import { Tile } from './components/tile';

const UserPostingsIndex = () => {
  useStyles(styles);

  const { postings } = useData();
  const {
    name,
    cv,
    coverLetter,
    email,
    phoneNumber,
    gitHub,
    linkedIn,
    socialImage,
    download,
    createdAt: createdAtLabel,
    expiresAt: expiresAtLabel,
    edit: editLabel,
    delete: deleteLabel,
  } = useTexts();
  const dispatch = useDispatch();
  const setControl = (value: any) => dispatch({ type: 'control', value });
  const { deletedPosting } = useControl();
  const { deletionMonit, cancel, confirm } = useTexts();

  return (
    <div id="user-postings-index">
      <ul>
        {postings.map((posting: any) => {
          const {
            id,
            href,
            businessName,
            industry,
            industryIcon,
            b2bMin,
            b2bMax,
            b2bCurrency,
            employmentMin,
            employmentMax,
            employmentCurrency,
            skills,
            logo,
            locality,
            country,
            cooperationMode,
            position,
            link: { href: editHref },
            createdAt,
            expiresAt,
            image: imageSrc,
            // applications,
          } = posting;

          return (
            <li className="posting-tile">
              <div className="id">{posting.id}.</div>
              <Tile
                id={id}
                href={href}
                businessName={businessName}
                industry={industry}
                industryIcon={industryIcon}
                b2bMin={b2bMin}
                b2bMax={b2bMax}
                b2bCurrency={b2bCurrency}
                employmentMin={employmentMin}
                employmentMax={employmentMax}
                employmentCurrency={employmentCurrency}
                skills={skills}
                logo={logo}
                locality={locality}
                country={country}
                cooperationMode={cooperationMode}
                position={position}
                editHref={editHref}
                createdAt={createdAt}
                expiresAt={expiresAt}
                setControl={setControl}
                createdAtLabel={createdAtLabel}
                expiresAtLabel={expiresAtLabel}
                editLabel={editLabel}
                deleteLabel={deleteLabel}
              />
              <Image
                heading={socialImage}
                imageSrc={imageSrc}
                // imageAlt
                postingId={posting.id}
                downloadLabel={download}
              />
            </li>
          );
        })}
      </ul>
      {deletedPosting && (
        <div
          className="deleted-posting-modal-cover"
          onClick={() => setControl({ deletedPosting: null })}
        >
          <div
            className="deleted-posting-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="monit">{deletionMonit}</div>
            <div className="buttons">
              <button
                className="cancel"
                onClick={() => setControl({ deletedPosting: null })}
              >
                {cancel}
              </button>
              <button
                className="confirm"
                onClick={async (e) => {
                  const response = await deleteApi({
                    path: `postings/${deletedPosting}`,
                  });

                  if (response) {
                    changeUrl({ href: window.location.pathname });
                  }
                }}
              >
                {confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPostingsIndex;
