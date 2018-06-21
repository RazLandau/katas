class StringCalcultor {
  static add(delimitedString) {
    return this.sum(
      this.ignoreGreaterThan1000(
        this.assertNoNegatives(
          this.parse(
            this.split(
              delimitedString
            )
          )
        )
      )
    );
  }

  static sum(nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  static ignoreGreaterThan1000(nums) {
    return nums.filter(num => num < 1000);
  }

  static assertNoNegatives(nums) {
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives}`);
    }
    return nums;
  }

  static parse(rawNums) {
    return rawNums.map(Number);
  }

  static split(delimitedString) {
    const rawNumbers = this.getRawNumbers(delimitedString);
    const delimiter = this.getDelimiter(delimitedString);
    return rawNumbers.split(delimiter);
  }

  static getRawNumbers(delimitedString) {
    const startOfSecondLine = delimitedString.indexOf('\n') + 1;
    return this.isDelimiterDefined(delimitedString) ?
      delimitedString.substring(startOfSecondLine) : delimitedString;
  }

  static isDelimiterDefined(delimitedString) {
    return delimitedString.startsWith('//');
  }

  static getDelimiter(delimitedString) {
    return this.isDelimiterDefined(delimitedString) ?
      this.getDefinedDelimiter(delimitedString) : /,|\n/;
  }

  static getDefinedDelimiter(delimitedString) {
    return delimitedString.substring(2, delimitedString.indexOf('\n'));
  }
}

module.exports = StringCalcultor;
