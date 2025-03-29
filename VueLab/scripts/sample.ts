function isString(value: any): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log("文字列です:", value);
  } else {
    console.log("数値です:", value);
  }
}

// テスト実行
processValue("Type Guards を試す");
processValue(100);
