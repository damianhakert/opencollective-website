import { createSelector } from 'reselect';

const getFormSelector = (state) => state.form;

/*
 * Edit collective form selector
 */
export const getEditCollectiveFormSelector = createSelector(
  getFormSelector,
  (form) => form.editCollective)

export const getEditCollectiveFormAttrSelector = createSelector(
  getEditCollectiveFormSelector,
  (editCollectiveForm) => editCollectiveForm.attributes);

export const getEditCollectiveInProgressSelector = createSelector(
  getEditCollectiveFormSelector,
  (editCollectiveForm) => editCollectiveForm.inProgress);

/*
 * Donation form selector
 */
export const getDonationFormSelector = createSelector(
	getFormSelector,
	(form) => form.donation);

/*
 * Profile form selector
 */

export const getProfileFormSelector = createSelector(
	getFormSelector,
	(form) => form.profile);

export const getProfileFormAttrSelector = createSelector(
	getProfileFormSelector,
	(profileForm) => profileForm.attributes);