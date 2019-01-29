import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

export function* init (): SagaIterator {
    yield takeEvery('INIT', () => console.log('kuku'));
}