/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let lt = 1;
        let rt = n;
        let mid = 0;
        for (let i = 0; i < n; i++) {
            mid = Math.ceil(((rt - lt) / 2) + lt);
            if (isBadVersion(mid)) {
                if (mid === 1) {
                    return 1;
                }
                if (!isBadVersion(mid - 1)){
                    return mid;    
                }
                rt = mid - 1;
                continue;
            }
            if (!isBadVersion(mid)) {
                lt = mid + 1;
                continue;
            }
        }
    };
};