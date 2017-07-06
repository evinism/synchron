export default function evalSortStrength(arr){
  const aug = arr.map((val, idx) => ({val, idx}));
  const sorted = aug.sort((a, b) => a.val > b.val);
  const res = sorted.map(
    (item, sortedIdx) => Math.abs(item.idx - sortedIdx)**2
  ).reduce((a, b) => a + b, 0);
  return (res / arr.length).toFixed(2) || 0;
}
