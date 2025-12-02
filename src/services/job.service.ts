import { Job, JobFilter, JobStats } from "@/types";
import { MOCK_JOBS } from "@/lib/mockData";

/**
 * Job Service - Handles job-related operations
 * In production, this would call a real API backend
 */

export const jobService = {
  /**
   * Get all jobs or filtered jobs
   */
  getJobs(filter?: JobFilter): Job[] {
    if (!filter) {
      return MOCK_JOBS;
    }

    return MOCK_JOBS.filter((job) => {
      const matchesSearch =
        !filter.searchQuery ||
        job.title.toLowerCase().includes(filter.searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(filter.searchQuery.toLowerCase());

      const matchesLevel =
        !filter.level || job.level === filter.level.toLowerCase();

      const matchesLocation =
        !filter.location ||
        job.location.toLowerCase().includes(filter.location.toLowerCase());

      const matchesMinMatch =
        !filter.minMatch || job.matchPercentage >= filter.minMatch;

      return (
        matchesSearch && matchesLevel && matchesLocation && matchesMinMatch
      );
    });
  },

  /**
   * Get single job by ID
   */
  getJobById(id: string): Job | undefined {
    return MOCK_JOBS.find((job) => job.id === id);
  },

  /**
   * Get job statistics
   */
  getStats(): JobStats {
    return {
      totalMatches: MOCK_JOBS.length,
      averageMatch: Math.round(
        MOCK_JOBS.reduce((sum, job) => sum + job.matchPercentage, 0) /
          MOCK_JOBS.length
      ),
      savedJobs: MOCK_JOBS.filter((job) => job.isSaved).length,
      skillsCount: 8,
    };
  },

  /**
   * Save/bookmark a job
   */
  saveJob(jobId: string): void {
    const job = MOCK_JOBS.find((j) => j.id === jobId);
    if (job) {
      job.isSaved = !job.isSaved;
      // In production, this would persist to backend
      localStorage.setItem("savedJobs", JSON.stringify(MOCK_JOBS));
    }
  },

  /**
   * Get saved jobs
   */
  getSavedJobs(): Job[] {
    return MOCK_JOBS.filter((job) => job.isSaved);
  },
};
