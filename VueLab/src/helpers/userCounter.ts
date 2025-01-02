import { type Ref, ref } from 'vue';

/**
 * useCounter カスタムフック
 * 
 * @param {number} initialValue - カウンターの初期値 (デフォルトは0)
 * @returns {object} - カウンターの値、インクリメント関数、デクリメント関数を含むオブジェクト
 * @property {Ref<number>} count - カウンターの現在の値を保持するリアクティブな参照
 * @property {function} increment - カウンターの値を1増やす関数
 * @property {function} decrement - カウンターの値を1減らす関数
 */
export const useCounter = (initialValue: number = 0): {
    count: Ref<number>,
    increment: () => void,
    decrement: () => void,
} => {
    const count = ref<number>(initialValue);

    /**
     * カウンターの値を1増やす
     */
    const increment = (): void => {
        count.value++;
    }

    /**
     * カウンターの値を1減らす
     */
    const decrement = (): void => {
        count.value--;
    }

    return { count, increment, decrement }
}