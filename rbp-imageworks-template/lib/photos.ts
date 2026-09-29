"use client";

const PHOTOS = [
  "1731635793329-0fdd79d179db",
  "1752350434967-29fe9a749b37",
  "1706560382811-dd7d0282c904",
  "1756992293716-b843700b5ab0",
  "1660399618104-53cf6b33339f",
  "1770492727730-05cb5ff3e90a",
  "1776662958125-893f153f592a",
  "1785403241855-f887b4eecf31",
  "1785403241660-b8ac924e9142",
  "1785403241652-5289a59f6f86",
];
function photoSrc(e, t, i) {
  return `https://images.unsplash.com/photo-${e}?w=${t}&h=${i}&q=80&auto=format&fit=crop`;
}
function photoUrl(e, t) {
  return `https://images.unsplash.com/photo-${e}?w=${t}&h=${t}&q=75&auto=format&fit=crop`;
}
export { PHOTOS };
export { photoSrc };
export { photoUrl };
