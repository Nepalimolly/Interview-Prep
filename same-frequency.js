// add whatever parameters you deem necessary
function sameFrequency(nums1, nums2) {
  let numsOne = nums1.toString();
  let numsTwo = nums2.toString();
  let nums1Freq = {};
  let nums2Freq = {};

  if (numsOne.length !== numsTwo.length) return false;

  for (let num of numsOne) {
    nums1Freq[num] = nums1Freq[num] + 1 || 1;
  }

  for (let num of numsTwo) {
    nums2Freq[num] = nums2Freq[num] + 1 || 1;
  }

  for (let key in nums1Freq) {
    if (nums1Freq[key] !== nums2Freq[key]) return false;
  }
  return true;
}
