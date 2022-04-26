/* eslint-disable */
// @ts-nocheck
import { RootState } from '../redux/configureStore';

interface IApiDetails {
  api: any;
  apiKey: string;
  listQueryKey: string;
  showQueryKey?: string;
}

interface IApiMethod {
  dispatch: any;
  queryFulfilled: any;
  getState(): RootState;
}

export async function handlePostMutationSuccess<T>(
  { api, apiKey, listQueryKey }: IApiDetails,
  { id }: T,
  { dispatch, queryFulfilled, getState }: IApiMethod,
) {
  const sortedQueries = Object.values(
    (getState() as RootState)[apiKey].queries,
  ).sort((a, b) => a.fulfilledTimeStamp < b.fulfilledTimeStamp);
  const lastArgs = sortedQueries?.[0]?.originalArgs;

  const {
    data: { results: updatedData },
  } = await queryFulfilled;
  dispatch(
    api.util.updateQueryData(listQueryKey, lastArgs, draft => {
      draft.results.unshift(updatedData as Partial<T>);
    }),
  );
}

export async function handlePutMutationSuccess<T>(
  { api, apiKey, listQueryKey, showQueryKey }: IApiDetails,
  { id }: T,
  { dispatch, queryFulfilled, getState }: IApiMethod,
) {
  const {
    data: { results: updatedData },
  } = await queryFulfilled;
  const sortedQueries = Object.values((getState() as RootState)[apiKey].queries)
    .filter(item => item.endpointName === listQueryKey)
    .sort((a, b) => (a.fulfilledTimeStamp < b.fulfilledTimeStamp ? 1 : -1));
  const lastArgs = sortedQueries?.[0]?.originalArgs;
  dispatch(
    api.util.updateQueryData(listQueryKey, lastArgs, draft => {
      draft.results = draft.results.map((item: Partial<T>) => {
        return item.id === id ? Object.assign(item, updatedData) : item;
      });
    }),
  );
  dispatch(
    api.util.updateQueryData(showQueryKey, id, draft => {
      Object.assign(draft, updatedData);
    }),
  );
}
