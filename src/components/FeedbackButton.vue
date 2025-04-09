<template>
  <div>
    <div class="feedback-container">
      <button class="feedback-button" @click="showModal = true">
        <svg t="1742672913599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10460" width="32" height="32">
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" fill="#9f7aea" p-id="10461"></path>
          <path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372z m171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-0.3-99.3-118.4-99.3 118.5-66.1 0.3c-4.4 0-8-3.6-8-8 0-1.9 0.7-3.7 1.9-5.2L471 512l-130.1-155.1c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3 99.3 118.4 99.3-118.5 66-0.3c4.4 0 8 3.6 8 8 0 1.9-0.7 3.7-1.9 5.2L553 512l130.1 155.1z" fill="#9f7aea" p-id="10462"></path>
        </svg>
      </button>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="showModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>提交建议</h3>
          <button class="close-button" @click="showModal = false">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="twitter">Twitter 用户名</label>
            <input 
              type="text" 
              id="twitter" 
              v-model="twitter" 
              placeholder="请输入您的Twitter用户名"
            >
          </div>
          <div class="form-group">
            <label for="suggestion">您的建议</label>
            <textarea 
              id="suggestion" 
              v-model="suggestion" 
              placeholder="请输入您的建议..."
              rows="4"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="submit-button" @click="submitFeedback">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackButton',
  data() {
    return {
      showModal: false,
      twitter: '',
      suggestion: ''
    }
  },
  methods: {
    submitFeedback() {
      if (!this.twitter || !this.suggestion) {
        alert('请填写完整信息');
        return;
      }
      // TODO: 这里可以添加提交到后端的逻辑
      console.log('Feedback submitted:', {
        twitter: this.twitter,
        suggestion: this.suggestion
      });
      this.showModal = false;
      this.twitter = '';
      this.suggestion = '';
    }
  }
}
</script>

<style scoped>
.feedback-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  animation: float 3s ease-in-out infinite;
}

.feedback-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(159, 126, 234, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(159, 126, 234, 0.4);
  color: #9f7aea;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 20px rgba(159, 126, 234, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feedback-button:hover {
  transform: scale(1.1);
  background: rgba(159, 126, 234, 0.3);
  box-shadow: 0 6px 25px rgba(159, 126, 234, 0.4);
  border: 2px solid rgba(159, 126, 234, 0.6);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 1001;
}

.modal-content {
  background: rgba(29, 29, 29, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(159, 126, 234, 0.2);
  position: relative;
  z-index: 1002;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.modal-header h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: #9f7aea;
  transition: all 0.3s ease;
}

.close-button:hover {
  transform: scale(1.2);
  color: #fff;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 12px;
  color: #c0c0c0;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(159, 126, 234, 0.2);
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #9f7aea;
  box-shadow: 0 0 0 2px rgba(159, 126, 234, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #6b46c1, #9f7aea);
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(159, 126, 234, 0.4);
}

.submit-button:active {
  transform: translateY(0);
}
</style> 