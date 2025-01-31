/// <reference types="@google-cloud/firestore" />
import 'reflect-metadata';
import { IRepository, IFireOrmQueryLine, IOrderByParams, IEntity } from './types';
import { AbstractFirestoreRepository } from './AbstractFirestoreRepository';
import { TransactionRepository } from './BaseFirestoreTransactionRepository';
import { FirestoreBatchRepository } from './BatchFirestoreRepository';
export declare class BaseFirestoreRepository<T extends IEntity> extends AbstractFirestoreRepository<T> implements IRepository<T> {
    private readonly firestoreColRef;
    constructor(colName: string, collectionPath?: string);
    findById(id: string): Promise<T>;
    create(item: T): Promise<T>;
    update(item: T): Promise<T>;
    set(item: T): Promise<T>;
    delete(id: string): Promise<void>;
    runTransaction(executor: (tran: TransactionRepository<T>) => Promise<void>): Promise<void>;
    createBatch(): FirestoreBatchRepository<IEntity>;
    getReference(id: string): FirebaseFirestore.DocumentReference;
    execute(queries: Array<IFireOrmQueryLine>, limitVal?: number, offsetVal?: number, orderByObj?: IOrderByParams, single?: boolean): Promise<T[]>;
}
